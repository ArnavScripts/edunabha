
'use client';

import { Button } from '@/components/ui/button';
import type { Lesson } from '@/lib/types';
import { Share2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface ShareButtonProps {
    lesson: Lesson;
}

export function ShareButton({ lesson }: ShareButtonProps) {
    const [isClient, setIsClient] = useState(false);
    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (navigator.share) {
            setCanShare(true);
        }
    }, []);

    const handleShare = async () => {
        if (!canShare) {
            alert('Web Share API is not supported in your browser.');
            return;
        }

        // The document must be visible to use the Web Share API
        if (document.visibilityState === 'hidden') {
            alert('Cannot share because the page is not active. Please switch back to this tab to share.');
            return;
        }

        try {
            const lessonUrl = window.location.href;
            await navigator.share({
                title: lesson.title,
                text: `Check out this lesson on NabhaLearn: ${lesson.title}`,
                url: lessonUrl,
            });
        } catch (error) {
            if (error instanceof DOMException) {
                if (error.name === 'AbortError') {
                    // User cancelled the share dialog. This is not an error.
                    console.log('Share was cancelled by the user.');
                } else if (error.name === 'PermissionDeniedError') {
                    console.error('Share permission was denied.', error);
                    alert('Sharing is not allowed. This might be because the page is not on a secure (HTTPS) connection, or a browser/system setting is blocking it.');
                } else {
                    console.error('An unexpected error occurred during share:', error);
                    alert(`An error occurred while sharing: ${error.message}`);
                }
            } else {
                console.error('An unexpected error occurred during share:', error);
                alert('An unknown error occurred while trying to share.');
            }
        }
    };

    if (!isClient || !canShare) {
        return null;
    }

    return (
        <Button onClick={handleShare} variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
        </Button>
    );
}
