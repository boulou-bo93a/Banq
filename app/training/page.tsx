import TrainingDisplayPage from '@/components/training/TrainingDisplayPage'

export const metadata = {
  title: 'دليل الممارسة التدريبية | منصة اقتناء قسائم السيارات',
  description: 'دليل تدريبي شامل لكيفية استخدام نظام شراء قسائم السيارات',
}

export default function TrainingPageRoute() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <TrainingDisplayPage />
      </div>
    </div>
  )
}
