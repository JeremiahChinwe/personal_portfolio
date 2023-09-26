import { useState } from "react"


export default function Contact() {
    const [input, setInput] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    return (
        <div name='contact' className='w-full flex flex-col justify-center items-center p-4'>
            <h1 className="pt-20 font-[600] text-[2.25rem] text-center pb-2 border-b-2 border-[#222222] w-fit block mx-auto">Contact</h1>

            <div className="w-full mt-10">
                <form action='https://getform.io/f/4bec9f0a-cd1c-40d1-aa67-2df21e24ba4e' method='POST' className='grid md:max-w-[50%] md:mx-auto px-[1.25rem]'>

                    <div className="grid">
                        <label htmlFor="name" className="mb-1">Name</label>
                        <input
                            className='py-2 px-4 rounded-lg border-2 border-[#222222]'
                            type='text'
                            value={input.name}
                            placeholder='Name'
                            name='name'
                            onChange={handleChange}
                        />

                        <label htmlFor="email" className="mt-6 mb-1">Email Address</label>
                        <input
                            className='py-2 px-4 rounded-lg border-2 border-[#222222]'
                            type='email'
                            value={input.email}
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid">
                        <label htmlFor="message" className="mt-6 mb-1">Your message</label>
                        <textarea
                            className='py-2 px-4 rounded-lg border-2 border-[#222222]'
                            name='message'
                            rows='10'
                            placeholder='Message'
                        ></textarea>

                        <button className='text-[#ffffff] bg-[#222222] border-2 rounded-xl px-4 py-3 my-8 mx-auto flex items-center hover:scale-[1.05]'>Send a message</button>
                    </div>
                </form>
            </div>
            {/* const today = new Date() */}
            {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
        </div>
    )
}

