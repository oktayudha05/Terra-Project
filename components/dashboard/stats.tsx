export default function Stats() {
  return (
    <div className="p-4 flex items-center justify-center">
    <div className="max-w-4xl w-full">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card backdrop-blur-md overflow-hidden bg-black/20 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-blue-400">Total Sampah</h2>
            <p className="text-4xl text-white">2.74 Kg</p>
            <p className="text-green-400">21% kurang dari satu bulan</p>
          </div>
        </div>
        <div className="card backdrop-blur-md overflow-hidden bg-black/20 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-pink-400">Pendapatan</h2>
            <p className="text-4xl text-white">21.000 IDR</p>
            <p className="text-green-400">21% kurang dari satu bulan</p>
          </div>
        </div>
        <div className="card backdrop-blur-md overflow-hidden bg-black/20 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-gray-300">Tugas Selesai</h2>
            <p className="text-4xl text-white">86%</p>
            <p className="text-red-400">31 tugas tersedia</p>
            <div className="flex justify-end">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}