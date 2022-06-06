import React from "react";
import password from './PasswordCreate.module.scss'
import main from '../../components/Main.module.scss'
import {Link} from "react-router-dom";
import {TextField} from "@mui/material";


export default function PasswordCreate() {
    return (
        <div className={password.PasswordCreate}>
            <div className={main.h1}>
                Create password
            </div>
            <div className={password.item}>
                <TextField id="standard-basic" label="New password" variant="standard" />
            </div>
            <div className={password.item}>
                <TextField id="standard-basic" label="Repeat new password" variant="standard" />
            </div>
            <label className={password.terms}>
                <input type={"checkbox"} />
                I have read and agreed
                <Link to='/privacy'>Terms of Use</Link>
            </label>
            <Link to='/seed-phrase' className={main.btn}>
                Create
            </Link>

        </div>
    )
}
