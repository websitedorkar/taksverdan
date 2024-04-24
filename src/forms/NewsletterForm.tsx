'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const NewsletterForm: React.FC<{ placeholder: string }> = ({ placeholder }) => {
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Check if email is empty
        if (!email.trim()) {
            alert('Please enter your email address.');
            return; // Stop further execution
        }

        setLoading(true);
        setSuccess(false);
        // Simulate loading for 2 seconds
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            // Clear email after successful submission
            setEmail('');
            // Reset success state after 5 seconds
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }, 2000);
    };

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='flex items-center gap-[8px]'>
            <Input type="email" 
                    value={email}
                    onChange={handleEmailChange}
                    className='min-w-[370px] border-white border-opacity-50 !outline-none !shadow-none bg-transparent text-white placeholder:text-white/50'
                placeholder={placeholder} />
                <Button variant={'secondary'} className='font-roboto'>
                    SUBSCRIBE
                </Button>
            </form>
            {loading && <div className='text-xs leading-6'>Please wait...</div>}
            {success && (
                <div className='text-xs leading-6 font-medium'>
                    Successfully subscribed! <br /> Thank you for subscribing.
                </div>
            )}
        </div>
    );
};
