import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsInstagram, BsTwitterX, BsGithub, BsLinkedin } from 'react-icons/bs'
import { DiAtom } from "react-icons/di";

export default function FooterCom() {
    return (
        <Footer container className='border border-t-8 bg-[rgb(195,221,253)] dark:bg-[rgb(18,18,18)]  border-blue-600 dark:border-blue-800  '>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='grid-1 mt-5'>
                        <Link to={"/"} className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <div className='px-2 py-1 rounded-xl bg-blue-600 text-xl text-white inline-flex'>
                                <span className='justify-center py-1 px-1'><DiAtom color='white' /></span>Ink<span className='px-0.5 text-xl rounded-lg text-black'>verse</span>
                            </div>
                        </Link>
                        <p className='text-lg pt-2 text-black dark:text-white'>
                            Where Every Story Finds Its Home.
                        </p>
                        <hr className='border border-gray-300 dark:border-gray-700 mt-4 sm:hidden' />
                    </div>
                    <div className='grid-2 grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='Pages' className='underline underline-offset-4' />
                            <Footer.LinkGroup col className='text-sm'>
                                <Footer.Link href='/search' target='_blank' rel='noopener noreferrer'>
                                    Explore
                                </Footer.Link>

                                <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                                    About
                                </Footer.Link>

                                <Footer.Link href='/projects' target='_blank' rel='noopener noreferrer'>
                                    Join us
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                        <div>
                            <Footer.Title title='Follow us' className='underline underline-offset-4' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='https://www.linkedin.com/in/piyush-kumar-793b231b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'>
                                    LinkedIn
                                </Footer.Link>

                                <Footer.Link href='https://www.instagram.com/_piyushkashyap_?igsh=MTcwbjNsNGhtczlndQ==' target='_blank' rel='noopener noreferrer'>
                                    Instagram
                                </Footer.Link>

                                <Footer.Link href='https://x.com/piyushkashyap__' target='_blank' rel='noopener noreferrer'>
                                    X
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                        <div>
                            <Footer.Title title='Legal' className='underline underline-offset-4' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                                    Privacy policy
                                </Footer.Link>

                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                                    Terms & conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href='#' by="Ink Co." year={new Date().getFullYear()} />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='https://www.linkedin.com/in/piyush-kumar-793b231b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' icon={BsLinkedin} />
                        <Footer.Icon href='https://github.com/sam4007' icon={BsGithub} />
                        <Footer.Icon href='https://x.com/piyushkashyap__' icon={BsTwitterX} />
                        <Footer.Icon href='https://www.instagram.com/_piyushkashyap_' icon={BsInstagram} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}
