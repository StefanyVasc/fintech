import * as S from './styles'

export function Loading() {
  return (
    <div className="mb" style={S.loading}>
      <div style={S.spin}>
        <style>
          {`
          @keyframes spin {
            to {
              transform: rotate(360deg)
            }
          }
      `}
        </style>
      </div>
    </div>
  )
}
