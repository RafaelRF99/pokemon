import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div>
            <h2>Header</h2>
            <p>Input</p>
            <div>
                {children}
            </div>
        </div>
    )
}