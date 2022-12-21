import { classNames } from '@headlessui/react/dist/utils/class-names';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import * as React from 'react';

export function ConsoleInput({
  text,
  className,
}: {
  text: React.ReactNode;
  className?: string;
}) {
  return (
    <pre
      style={{ backgroundColor: 'rgba(0, 10, 18, .6)', borderColor: '#0f172a' }}
      className={classNames(
        className,
        'text-sm md:text-md relative p-6 pr-5 text-indigo-100 rounded-2xl border-2 shadow-inner'
      )}
    >
      {text}
      <button
        style={{ color: '#0f172a', borderColor: '#0f172a' }}
        className="h-11 w-11 p-2.5 float-right -mt-3 -mr-2 rounded-xl border-2 shadow-md"
      >
        <ClipboardDocumentIcon className="text-indigo-500 opacity-40 hover:opacity-100" />
      </button>
    </pre>
  );
}
