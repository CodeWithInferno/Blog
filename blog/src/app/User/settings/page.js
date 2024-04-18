'use client';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Settings = () => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    useEffect(() => {
        if (!loading && !session) {
            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }
        }
    }, [session, loading]);

    return(
        <h1>Heyy</h1>
    )
};

export default Settings;