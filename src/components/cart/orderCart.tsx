import Link from 'next/link'
import { IoCardOutline } from 'react-icons/io5'

export const OrderCard = () => {
  const orders = [
    { id: 1, name: 'Mark', status: 'Pagada', color: 'text-green-800' },
    { id: 2, name: 'John', status: 'No Pagada', color: 'text-red-800' }
  ]

  return (
    <div className="mb-10">
      {/* Diseño para pantallas grandes */}
      <div className="hidden md:block">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Orden</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nombre completo</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Estado</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4">{order.name}</td>
                <td className="flex items-center text-sm text-gray-900 font-light px-6 py-4">
                  <IoCardOutline className={order.color} />
                  <span className={`mx-2 ${order.color}`}>{order.status}</span>
                </td>
                <td className="text-sm text-gray-900 font-light px-6">
                  <Link href={`/orders/${order.id}`} className="hover:underline">Ver orden</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Diseño para móviles */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-900">Orden: {order.id}</span>
              <div className="flex items-center">
                <IoCardOutline className={order.color} />
                <span className={`ml-2 ${order.color}`}>{order.status}</span>
              </div>
            </div>
            <p className="text-sm text-gray-900 mt-2">Nombre: {order.name}</p>
            <Link href={`/orders/${order.id}`} className="text-blue-600 hover:underline text-sm mt-2 block">
              Ver orden
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
