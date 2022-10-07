import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReadContact = () => {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6304e96294b8c58fd7280ac4.mockapi.io/fakeData`)
        .then((response) => {
            setAPIData(response.data);
        })

    }, []);

    const setData = (data) => {
        let { name, email, job, phone} = data;
        // localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);
        localStorage.setItem('Job', job);
        localStorage.setItem('Phone Number', phone);
        console.log(data)
    }

    return (
        <>
        <div className="flex justify-center items-center text-2xl mb-5">Contacts List</div>
        <div className="flex justify-center items-center">
            <table>
                <thead>
                    <tr>
                        <th className="pr-14 pl-14 border border-red-400 px-4 py-2 text-gray-800">Name</th>
                        <th className="pr-14 pl-14 border border-red-400 px-4 py-2 text-gray-800">Email</th>
                        <th className="pr-14 pl-14 border border-red-400 px-4 py-2 text-gray-800">Job</th>
                        <th className="pr-14 pl-14 border border-red-400 px-4 py-2 text-gray-800">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        APIData.map((data) => {
                            return (
                                <tr>
                        <td className="p-3 border border-red-400 px-4 py-2">{data.name}</td>
                        <td className="p-3 border border-red-400 px-4 py-2">{data.email}</td>
                        <td className="p-3 border border-red-400 px-4 py-2">{data.job}</td>
                        <td className="p-3 border border-red-400 px-4 py-2">{data.phone}</td>
                    </tr>

                            )
                        })
                    }
                    
                </tbody>
                <Link to='/update'>
                <button onClick={() => setData()} className="btn btn-accent mt-7 px-10 py-3 bg-slate-800 text-black">Update</button>
                </Link>
            </table>
        </div>
        </>
    )
}
export default ReadContact;
