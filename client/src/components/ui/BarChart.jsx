import './BarChart.css'

/**
 * Horizontal share chart for survey results. One series per chart, so the
 * question title carries identity and no legend is needed. Bars scale to the
 * largest value and every row is direct-labeled with its share.
 */
export default function BarChart({ question, data, variant = 'blue' }) {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  const max = Math.max(...data.map((d) => d.value))

  return (
    <figure className={`bar-chart bar-chart-${variant}`}>
      <figcaption className="bar-chart-question">{question}</figcaption>

      <div className="bar-chart-rows">
        {data.map((d, i) => {
          const percent = (d.value / total) * 100
          return (
            <div className="bar-chart-row" key={d.label}>
              <div className="bar-chart-head">
                <p className="bar-chart-label">{d.label}</p>
                <p className="bar-chart-value">{percent.toFixed(1)}%</p>
              </div>
              <div className="bar-chart-track">
                <div
                  className="bar-chart-fill"
                  style={{
                    '--bar-width': `${(d.value / max) * 100}%`,
                    animationDelay: `${i * 60}ms`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </figure>
  )
}
