
import Navbar from './header'
import Footer from './footer'

export default function Layout(props: any) {
    const { children } = props
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}