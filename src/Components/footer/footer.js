import React from "react";

const ReactFooter=()=>{
    return (
        <footer class="py-6 dark:bg-gray-800 dark:text-gray-50">
            <div class="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div class="grid grid-cols-12">
                    <div class="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a rel="noopener noreferrer" href="#" class="flex justify-center space-x-3 md:justify-start">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
                                    <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                                </svg>
                            </div>
                            <span class="self-center text-2xl font-semibold">Brand name</span>
                        </a>
                    </div>
                    <div class="col-span-6 text-center md:text-left md:col-span-3">
                        <p class="pb-1 text-lg font-medium">Category</p>
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="hover:dark:text-violet-400">Link</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-span-6 text-center md:text-left md:col-span-3">
                        <p class="pb-1 text-lg font-medium">Category</p>
                        <ul>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="hover:dark:text-violet-400">Link</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" class="hover:dark:text-violet-400">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    <p className="">
                        @{new Date().getFullYear()} Eat-Rave-Love. All rights reserved.
                    </p>
                </div>
                <div className="footer-terms">
                    <a href="/terms">
                        <div>
                            <p>Terms & Conditions</p>    
                        </div>
                    </a>
                    <a href="/privacy">
                        <div>
                            <p>Privacy</p>    
                        </div>
                    </a>
                    <a href="/security">
                        <div>
                            <p>Security</p>    
                        </div>
                    </a>
                    <a href="/cookies">
                        <div>
                            <p>Cookies declaration</p>    
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default ReactFooter;