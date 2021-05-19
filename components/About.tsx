import { FormEvent } from 'react'

import styles from '@styles/About.module.sass'

export default function About(): JSX.Element {

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        var form = e.currentTarget
        form.submit()
        form.reset()
    }

    return (
        <div className={styles.home}>
            <div className={styles.left}>
                <img src="/assets/me.jpg" alt="Me" />
                <div>
                    <h1>👋 Hey there!</h1>
                    <h2>My name is <b>Daniel Vulić</b></h2>
                    <hr />
                    <h3>I'm an 💻 IT student creating 🎮 games, 📱 apps and ✨ much more.</h3>
                    <hr />
                    <h2>Want to hire me? Send me a message.</h2>
                    <h1>Let's create awesome stuff together!</h1>
                </div>
            </div>
            <div className={styles.right}>
                <iframe name='hiddenIframe' id='hiddenIframe' style={{ display: 'none' }} />
                <form className={styles.form} action='https://docs.google.com/forms/u/0/d/e/1FAIpQLScJ_0qxaUpeM1maIvl4bKC7385EypsrBP1i4ksj7qg60_b-WQ/formResponse' method='post' target='hiddenIframe' onSubmit={e => submitForm(e)}>
                    <h1>Send me a message</h1>
                    <label htmlFor='inputName'>Name</label>
                    <input type='text' id='inputName' name='entry.1240266346' />

                    <label htmlFor='inputSubject'>Subject</label>
                    <input type='text' id='inputSubject' name='entry.434626942' />

                    <label htmlFor='inputEmail'>Email *</label>
                    <input type='email' required id='inputEmail' name='entry.813806805' />

                    <label htmlFor='inputMessage'>Message *</label>
                    <textarea id='inputMessage' required name='entry.731434310' rows={3}></textarea>

                    <input type='submit' value='Send message' />
                </form>
            </div>
        </div>
    )
}