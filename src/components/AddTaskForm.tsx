'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input'; // Import shadcn Input component
import { Button } from '@/components/ui/button'; // Import shadcn Button component

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export default function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center gap-2">
        <Input
          type="text"
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow"
        />
          <Button type="submit" className="px-4 py-2">
            Add
          </Button>
      </div>
    </form>
  );
}