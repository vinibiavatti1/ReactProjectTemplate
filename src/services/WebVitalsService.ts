import { ReportHandler } from 'web-vitals'

/**
 * Report web vitals builtin function.
 * @param onPerfEntry
 */
function reportWebVitals(onPerfEntry?: ReportHandler): void {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(
            ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(onPerfEntry)
                getFID(onPerfEntry)
                getFCP(onPerfEntry)
                getLCP(onPerfEntry)
                getTTFB(onPerfEntry)
            }
        )
    }
}

export default {
    reportWebVitals,
}
