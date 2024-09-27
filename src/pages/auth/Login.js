import React from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import Button from "../../components/widgets/Button";
import FormInput from "../../components/widgets/FormInput";
import AuthCard from "../../components/cards/AuthCard";

const Login = () => {
    return (
        <AuthLayout>
            <AuthCard>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-base text-black dark:text-white">
                        Please sign in to access your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div className="mb-10">
                            <FormInput placeholder="Username" />
                        </div>
                        <div className="relative">
                            <p className="text-sm text-black underline cursor-pointer absolute -top-6 right-0">
                                <a href="/forgot-password">Forgot Password?</a>
                            </p>
                            <FormInput placeholder="Password" />
                        </div>
                        <div>
                            <Button title="Sign in" />
                        </div>
                        <p className="text-sm font-light text-black dark:text-gray-400">
                            By signing in, I agree to Brainstake{" "}
                            <a href="https://eschools.brainstake.tech/terms.html" target="_blank" className="underline">
                                Terms of service
                            </a>{" "}
                            and{" "}
                            <a href="https://eschools.brainstake.tech/privacy.html" target="_blank" className="underline">
                                Privacy policy
                            </a>
                        </p>
                    </form>
                </div>
            </AuthCard>
        </AuthLayout>
    );
};

export default Login;
