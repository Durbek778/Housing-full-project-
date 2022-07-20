import Generic from '../pages/Generic'
import  Home  from '../pages/Home'

export const navbar = [
    {id: 1, title: 'Home', path: '/home', element: <Home/> },
    {
     id: 1, title: 'Properties', path: '/properties',
     element: <Generic/>
    },
    {id: 1, title: 'Contact', path: '/contact', element: <Generic/> },
]   