// Main application entry point
import { initNavigation, initAOS, initScrollEvents } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initAOS();
    initScrollEvents();
});