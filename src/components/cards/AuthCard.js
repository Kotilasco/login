import React from "react";

const AuthCard = ({ children }) => {
    return (
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            {children}
        </div>
    )
}

export default AuthCard;