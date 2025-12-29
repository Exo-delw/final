
export default function AdminPage() {

    return (
            <div className="flex flex-col items-center w-full p-8 md:p-12 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Welcome, Admin
            </h1>
            <p className="text-xl text-gray-600">
                This dashboard is currently under development. We are working hard to bring you the best analytics and insights to help you make data-driven decisions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Coming Soon
                </h2>
                <p className="text-lg text-gray-600">
                    Stay tuned for more insights and analysis.
                </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                <img src="/images/under-construction.png" alt="Under Construction" className="w-full h-auto"/>
                </div>
            </div>
            </div>
  );}
