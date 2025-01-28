'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Checkbox } from "@/components/ui/checkbox"; // Import shadcn Checkbox

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onUpdate: (id: string, updates: Partial<Task>) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onUpdate, onDelete }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleUpdate = () => {
    onUpdate(task.id, { title: editedTitle });
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedTitle(task.title);
  };

  return (
    <div className="flex items-center space-x-2">
      <motion.div
        className="flex items-center flex-grow p-3 bg-gray-50 rounded-lg shadow-sm"
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
      >
        <Checkbox
          checked={task.completed}
          onCheckedChange={(checked) => onUpdate(task.id, { completed: checked as boolean })}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleUpdate}
            onKeyPress={(e) => e.key === 'Enter' && handleUpdate()}
            className="ml-3 p-1 border rounded flex-grow text-sm"
            autoFocus
          />
        ) : (
          <span
            className={`ml-3 text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
            onClick={handleEdit}
          >
            {task.title}
          </span>
        )}
      </motion.div>
      <div className="flex space-x-1">
        <motion.button
          onClick={handleEdit}
          className="p-2 text-blue-500 hover:text-blue-700 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </motion.button>
        <motion.button
          onClick={() => onDelete(task.id)}
          className="p-2 text-red-500 hover:text-red-700 rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}