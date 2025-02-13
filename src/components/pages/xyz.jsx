import { CalendarDays } from "lucide-react"

const notices = [
  {
    date: "31 Jan",
    title: "Seating Arrangement for 1st Mid Sem Exam of 2nd Sem B.Tech. AY2024-25",
    isNew: true,
  },
  {
    date: "31 Jan",
    title: "1st Mid Sem Exam Schedule 2nd Sem. B.Tech. AY24-25",
    isNew: true,
  },
  {
    date: "31 Jan",
    title:
      "Attention: BTech 6th sem & 8th sem students; Internship course registration and Submission of Report & Industry Certificate",
    isNew: true,
  },
  {
    date: "25 Jan",
    title: "Notice for Change in Seating Arrangement (Tutorial) for 1st Sem. B.Tech. Students AY24-25",
  },
  {
    date: "23 Jan",
    title: "Seating Arrangement for 1st Mid Sem. Exam Even Semesters, AY2024-25",
  },
  {
    date: "21 Jan",
    title:
      "Registration Check for B. Tech. Sem. – 2, 4, 6 & 8, M. Tech. Sem. 4 and PDDC Sem. – 2, 4, 6 & 8 in Even Sem. AY 2024-25",
  },
  {
    date: "20 Jan",
    title: "1st Mid Sem Exam Schedules Even Semesters of B.Tech. PDDC AY24-25",
  },
  {
    date: "16 Jan",
    title: "Registration Notice (EVEN semester AY 2024-25) for M. Tech. Sem. 2",
  },
  {
    date: "8 Jan",
    title: "Revised Allotment of B.Tech Sem 6 Open elective courses and NPTEL against OE AY 2024-25",
  },
  {
    date: "1 Jan",
    title: "Registration Notice (EVEN semester AY 2024-25) for B. Tech. Sem. - 2 students",
  },
]

export default function NoticePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-4 py-8 sm:px-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">All Notices</h1>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-950">
                    <th className="text-left text-sm font-semibold text-white px-6 py-4 w-36">Date</th>
                    <th className="text-left text-sm font-semibold text-white px-6 py-4">Title</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {notices.map((notice, index) => (
                    <tr key={index} className="group hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium text-blue-950">{notice.date}</span>
                          {notice.isNew && (
                            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                              New
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="text-sm text-gray-700 hover:text-blue-950 transition-colors duration-200"
                        >
                          {notice.title}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}