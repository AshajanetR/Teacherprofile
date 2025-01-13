import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlefetch } from '../features/teacher';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { handleprofileid } from '../features/profileid';
import { handleprofileinfo } from '../features/profileinfo';
import SearchBar from './searchbarcomponent';

const Card = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const teacherarray = useSelector((state) => state.teacher.value);
    
    const [filteredTeachers, setFilteredTeachers] = useState(teacherarray);

    useEffect(() => {
        const fetchteachers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/auth/getdata");
                dispatch(handlefetch(response.data));
                setFilteredTeachers(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchteachers();
    }, [dispatch]);


    const handleSearch = (query) => {
        const filtered = teacherarray.filter((teacher) =>
            teacher.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredTeachers(filtered);
    };

    return (
        <div className='pt-[120px]'>
            <SearchBar onSearch={handleSearch} />
            {filteredTeachers.length > 0 ? (
                filteredTeachers.map((teacher) => (
                    <div
                        key={teacher.id}
                        onClick={() => {
                            navigate("/profile");
                            dispatch(handleprofileid(teacher.id));
                            axios
                                .get(`http://localhost:3000/auth/getuserdata/${teacher._id}`)
                                .then((response) => {
                                    console.log(response.data);
                                    dispatch(handleprofileinfo(response.data));
                                });
                        }}
                        className="max-w-xs mx-auto bg-red-500 text-white rounded-lg shadow-lg p-6 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-red-600 m-4"
                    >
                        <h2 className="text-2xl font-semibold text-center">{teacher.name}</h2>
                    </div>
                ))
            ) : (
                <p>No teachers found</p>
            )}
        </div>
    );
};

export default Card;
