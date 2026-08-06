"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "@/lib/api";
import { getAdminHeaders } from "@/lib/admin-api";
import { Button, Card, CardBody, FieldLabel, Input, SectionHeading, Select, Textarea } from "./ui";

export type ResourceField = {
  name: string;
  label: string;
  type?: "text" | "number" | "textarea" | "json" | "checkbox" | "select";
  placeholder?: string;
  options?: string[];
};

export function ResourceManager({
  title,
  description,
  endpoint,
  fields,
  columns
}: {
  title: string;
  description: string;
  endpoint: string;
  fields: ResourceField[];
  columns: { key: string; label: string }[];
}) {
  const [items, setItems] = useState<Record<string, unknown>[]>([]);
  const [editingItem, setEditingItem] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const { register, handleSubmit, reset, setValue, watch } = useForm<Record<string, unknown>>();

  useEffect(() => {
    void loadItems();
  }, [endpoint]);

  const loadItems = async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint, { headers: getAdminHeaders() });
      setItems((response.data.data.documents ?? []) as Record<string, unknown>[]);
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (item: Record<string, unknown>) => {
    setEditingItem(item);
    fields.forEach((field) => {
      const value = item[field.name];
      if (field.type === "json") {
        setValue(field.name, JSON.stringify(value ?? (Array.isArray(value) ? [] : {}), null, 2));
        return;
      }
      if (field.type === "checkbox") {
        setValue(field.name, Boolean(value));
        return;
      }
      setValue(field.name, value ?? "");
    });
  };

  const cancelEdit = () => {
    setEditingItem(null);
    reset();
  };

  const preparePayload = (data: Record<string, unknown>) => {
    return fields.reduce<Record<string, unknown>>((payload, field) => {
      const value = data[field.name];
      if (field.type === "json") {
        payload[field.name] = value ? JSON.parse(String(value)) : null;
        return payload;
      }
      if (field.type === "number") {
        payload[field.name] = Number(value);
        return payload;
      }
      if (field.type === "checkbox") {
        payload[field.name] = Boolean(value);
        return payload;
      }
      payload[field.name] = value;
      return payload;
    }, {});
  };

  const submit = async (data: Record<string, unknown>) => {
    const payload = preparePayload(data);
    const headers = getAdminHeaders();

    if (editingItem?._id) {
      await api.patch(`${endpoint}/${editingItem._id}`, payload, { headers });
      setMessage(`${title} updated successfully.`);
    } else {
      await api.post(endpoint, payload, { headers });
      setMessage(`${title} created successfully.`);
    }

    cancelEdit();
    await loadItems();
  };

  const removeItem = async (id: string) => {
    await api.delete(`${endpoint}/${id}`, { headers: getAdminHeaders() });
    await loadItems();
  };

  return (
    <div className="space-y-8">
      <SectionHeading eyebrow="Admin" title={title} description={description} />
      {message ? <Card><CardBody><p className="text-sm text-emerald-600">{message}</p></CardBody></Card> : null}

      <Card>
        <CardBody>
          <form onSubmit={handleSubmit(submit)} className="grid gap-5 lg:grid-cols-2">
            {fields.map((field) => (
              <div key={field.name} className={field.type === "textarea" || field.type === "json" ? "lg:col-span-2" : ""}>
                <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>
                {field.type === "textarea" ? (
                  <Textarea id={field.name} placeholder={field.placeholder} {...register(field.name)} />
                ) : field.type === "json" ? (
                  <Textarea id={field.name} placeholder={field.placeholder} {...register(field.name)} className="font-mono text-xs" />
                ) : field.type === "select" ? (
                  <Select id={field.name} {...register(field.name)}>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                ) : field.type === "checkbox" ? (
                  <input id={field.name} type="checkbox" className="h-5 w-5 rounded border-slate-300 text-navy-900" {...register(field.name)} />
                ) : (
                  <Input id={field.name} type={field.type === "number" ? "number" : "text"} placeholder={field.placeholder} {...register(field.name)} />
                )}
              </div>
            ))}
            <div className="lg:col-span-2 flex gap-3">
              <Button type="submit">{editingItem ? `Update ${title}` : `Add ${title}`}</Button>
              {editingItem ? (
                <Button type="button" variant="ghost" onClick={cancelEdit}>
                  Cancel Edit
                </Button>
              ) : null}
            </div>
          </form>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 text-slate-500">
                <tr>
                  {columns.map((column) => (
                    <th key={column.key} className="py-3 pr-4 font-medium">{column.label}</th>
                  ))}
                  <th className="py-3 pr-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td className="py-6 text-slate-500" colSpan={columns.length + 1}>Loading...</td></tr>
                ) : items.length ? (
                  items.map((item) => (
                    <tr key={String(item._id)} className="border-b border-slate-100 align-top">
                      {columns.map((column) => (
                        <td key={column.key} className="py-4 pr-4 text-slate-700">{String(column.key.split(".").reduce((value, segment) => (value as Record<string, unknown>)?.[segment], item) ?? "-")}</td>
                      ))}
                      <td className="py-4 pr-4">
                        <div className="flex flex-wrap gap-2">
                          <Button type="button" variant="ghost" size="sm" onClick={() => startEdit(item)}>
                            Edit
                          </Button>
                          <Button type="button" variant="ghost" size="sm" onClick={() => void removeItem(String(item._id))}>
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td className="py-6 text-slate-500" colSpan={columns.length + 1}>No records found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
