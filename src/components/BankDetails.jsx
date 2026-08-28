import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function BankDetails({ clabe, bank, titular }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(clabe);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-olive-100 p-5 rounded-2xl text-left max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs uppercase font-medium tracking-wider text-olive-600">{bank}</span>
        <span className="text-[11px] text-neutral-400">Transferencia</span>
      </div>
      <p className="text-sm font-semibold text-neutral-800">{titular}</p>
      <p className="font-mono text-sm tracking-wider text-neutral-600 my-2">{clabe}</p>
      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-olive-50 hover:bg-olive-100 text-olive-700 text-xs font-medium transition-colors cursor-pointer"
      >
        {copied ? (
          <>
            <Check size={15} className="text-green-600" />
            <span className="text-green-600">¡CLABE Copiada!</span>
          </>
        ) : (
          <>
            <Copy size={15} />
            <span>Copiar CLABE</span>
          </>
        )}
      </button>
    </div>
  );
}