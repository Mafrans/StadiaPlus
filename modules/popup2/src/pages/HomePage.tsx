import React from 'react';
import Container from '../components/Container';
import { CgArrowRight, CgArrowTopRight, CgGift, CgOptions, CgProfile, CgSupport, CgSync } from 'react-icons/cg';

export default function HomePage() {
    return <Container>
        <div>
            <h1>Get in sync</h1>
            <p>Sync your games with Stadia+ to automagically keep track of all your achievements and stats.</p>
            <p>
                <a href={''}>More about syncing</a>
                <CgArrowRight />
                <button><CgSync />Enable sync</button>
            </p>
        </div>
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