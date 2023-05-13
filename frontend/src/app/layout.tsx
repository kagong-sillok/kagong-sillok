import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactQueryProvider from './ReactQueryProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ReactQueryProvider>
          {children}
          </ReactQueryProvider>
          </body>
    </html>
  )
}
