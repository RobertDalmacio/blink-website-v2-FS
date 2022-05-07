import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { communityState } from '../atoms/communitiesAtom';
import { DirectoryMenuItem, directoryMenuState } from '../atoms/directoryMenuAtom';

const useDirectory = () => {
    const router = useRouter()
    const [directoryState, setDirectoryState] = useRecoilState(directoryMenuState)
    const communityStateValue = useRecoilValue(communityState)

    const toggleMenuOpen = () => {
        setDirectoryState(prev => ({
            ...prev,
            isOpen: !directoryState.isOpen
        }))
    }

    const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
        setDirectoryState(prev => ({
            ...prev,
            selectedMenuItem: menuItem
        }))
        router.push(menuItem.link)
        if (directoryState.isOpen) {
            toggleMenuOpen()
        }
    }

    useEffect(() => {
        const {currentCommunity} = communityStateValue

        if (currentCommunity) {
            setDirectoryState(prev => ({
                ...prev,
                selectedMenuItem: {
                    displayText: `b/${currentCommunity.id}`,
                    link: `/forum/b/${currentCommunity.id}`,
                    imageURL: currentCommunity.imageURL,
                }

            }))
        }
    }, [communityStateValue.currentCommunity])

    return {
        directoryState,
        toggleMenuOpen,
        onSelectMenuItem
    }
}
export default useDirectory;