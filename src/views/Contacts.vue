<template>
    <main>
        <div class="banner contactspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <Header></Header>
                    </div>
                </div>
                <Heading
                    classItem="title-big"
                    :text="title[0].text"
                />
            </div>
        </div>
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
                        <div class="title mt-5">Tell us about your tastes</div>
                        <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
    
                        <form @submit.prevent="submit" action="#" class="mt-5">
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-center">
                                    <label for="name-input" class="mb-0">
                                        Name
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name-input"
                                        v-model="form.name"
                                    >
                                </div>
                            </div>
    
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-center">
                                    <label for="email-input" class="mb-0">
                                        E-mail
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email-input"
                                        v-model="form.email"
                                    >
                                </div>
                            </div>
    
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-center">
                                    <label for="phone-input" class="mb-0">
                                        Phone
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="phone-input"
                                        v-model="form.phone"
                                    >
                                </div>
                            </div>
    
                            <div class="form-group row textarea">
                                <div class="col col-12 d-flex justify-content-center">
                                    <label for="pmessage" class="mb-3 mt-3 text-center">
                                        Your message
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12">
                                    <textarea
                                        class="form-control"
                                        name="message"
                                        id="message"
                                        rows="5"
                                        placeholder="Leave your comments here"
                                        v-model="form.text"
                                    >
                                    </textarea>
                                </div>
                            </div>
    
                            <div class="row">
                                <div class="col">
                                    <button
                                        class="btn btn-outline-dark send-btn"
                                        @click.prevent="sendForm"
                                    >
                                        Send us
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import Header from '@/components/Header';
    import Heading from '@/components/Heading';

    export default {
        components: {
            Header,
            Heading,
        },

        data() {
            return {
                title: [
                    {
                        text: 'Contact us',
                    }
                ],

                form: {
                    name: '',
                    email: '',
                    phone: '',
                    text: '',
                },
            }
        },
        methods: {
            sendForm() {
                console.log(this.form);
            },
        }
    }
</script>