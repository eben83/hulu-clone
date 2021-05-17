//ES6 allows you to destructure the 'porps' so you add in the {} braces and select the 
//keys you wish to add as the props.
function HeaderItem({ Icon, title }) {
    return (
        <div className='flex flex-col items-center cursor-pointer group 
        w-12 sm:w-20 hover:text-white'>
            <Icon className='h-8 mb-1 group-hover:animate-bounce' />
            <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
        </div>
    )
}

export default HeaderItem
