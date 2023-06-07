import { ReactNode } from 'react'
import Header from '../Header'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div>
            <Header />
            <p>Input</p>
            <div>
                {children}
            </div>
        </div>
    )
}