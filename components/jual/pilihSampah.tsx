'use client'
import dataSampah from "@/lib/jenisSampah";
import FormModal from "./formModal";

export default function PilihSampah() {
  const data = dataSampah();

  const showModal = (key: string) => {
    const modal = document.getElementById(`modal-${key}`) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      {Object.keys(data).map((key) => (
        <div onClick={() => showModal(key)} key={key} className="cursor-pointer backdrop-blur-md overflow-hidden shadow-lg bg-white/20 p-6 rounded-lg transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4">{data[key as keyof typeof data].title}</h3>
          <p className={`${data[key as keyof typeof data].color !== 'text-red-400' ? 'text-green-500' : 'text-red-400'}`}>Saldo : {data[key as keyof typeof data].saldo} / kg</p>
        </div>
      ))}

      {Object.keys(data).map((key) => (
        <dialog id={`modal-${key}`} key={`modal-${key}`} className="modal">
          <div className="modal-box backdrop-blur-md overflow-hidden shadow-lg bg-black/50 p-6 rounded-lg">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">{data[key as keyof typeof data].title}</h3>
            <p className={`${data[key as keyof typeof data].color}`}>Saldo: {data[key as keyof typeof data].bilangan == 'negatif'?'-':'+'} {data[key as keyof typeof data].saldo} / kg</p>
            <FormModal produk={data[key as keyof typeof data].title} biaya={data[key as keyof typeof data].saldo} bilangan={data[key as keyof typeof data].bilangan} />
          </div>
        </dialog>
      ))}
    </>
  );
}
