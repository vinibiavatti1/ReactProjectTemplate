import { useTranslation } from 'react-i18next'
import PageLayout from '../../layouts/pageLayout/PageLayout'
import Info from './components/info/Info'
import './Home.scss'

/**
 * React Home Component.
 * @returns React element.
 */
export default function Home(): JSX.Element {
  const [t, i18n] = useTranslation()
  return (
    <PageLayout>
      <div className="text-center">
        <h1>{t('general.app.message')}</h1>
        <Info language={i18n.language} />
      </div>
    </PageLayout>
  )
}
