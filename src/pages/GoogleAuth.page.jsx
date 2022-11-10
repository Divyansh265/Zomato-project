import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
//redux
import { useDispatch } from "react-redux"
import { googleAuth } from '../redux/reducers/auth/auth.actions'
const GoogleAuth = () => {
    const { token } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            dispatch(googleAuth(token)).then(() => navigate("/delivery"))
        }
    }, [token])
    return (
        <div>Loading, Please wait...</div>
    )
}

export default GoogleAuth