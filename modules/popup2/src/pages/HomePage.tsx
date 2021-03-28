import React from 'react';
import Container from '../components/Container';
import {
    CgArrowRight,
    CgArrowTopRight,
    CgGift,
    CgOptions,
    CgProfile,
    CgSupport,
    CgSync,
} from 'react-icons/cg';
import OnboardPanel from '../components/OnboardPanel';

export default function HomePage() {
    return <Container>
        <OnboardPanel
            title={'Get in sync'}
            body={'Sync your games with Stadia+ to automagically keep track of all your achievements and stats.'}
            link={{
                icon: <CgArrowRight />,
                label: 'More about syncing',
                url: ''
            }}
            button={{
                icon: <CgSync />,
                label: 'Enable sync',
            }}
        />
        <hr />
        <div>
            <div>
                <img src={''} alt={'Profile picture'} />
                <CgProfile />
            </div>
            <div>
                <span>Mafrans</span>
                <span>#1234</span>
            </div>
            <CgArrowTopRight />
        </div>
        <div>
            <button>
                <CgSupport />
                Help
            </button>
            <button>
                <CgGift />
                Donate
            </button>
            <button>
                <CgOptions />
                Settings
            </button>
        </div>
    </Container>;
}