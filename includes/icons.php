<?php
/**
 * Inline SVG icons, ported from the Next.js site's components/icons.tsx.
 * Usage: icon('arrow-right', 'h-5 w-5');
 */

function icon_paths(string $name): string
{
    switch ($name) {
        case 'megaphone':
            return '<path d="M3 11v3"/><path d="M7 10v5"/><path d="M7 15l11 4V5L7 10H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3z"/><path d="M14.5 17.5a3 3 0 0 1-5.5 1"/>';
        case 'mail':
            return '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>';
        case 'globe':
            return '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/>';
        case 'device':
            return '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>';
        case 'chart':
            return '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 14l4-4 3 3 5-6"/>';
        case 'users':
            return '<circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8"/><path d="M17.8 14.5c2 .9 3.2 3 3.2 5.5"/>';
        case 'pen':
            return '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>';
        case 'layout':
            return '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>';
        case 'video':
            return '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4V8z"/>';
        case 'workflow':
            return '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4a2 2 0 0 1 2 2V14"/><path d="M14 17.5h-4a2 2 0 0 1-2-2V10"/>';
        case 'check':
            return '<path d="M5 13l4 4L19 7"/>';
        case 'arrow-right':
            return '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>';
        case 'arrow-up-right':
            return '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>';
        case 'menu':
            return '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>';
        case 'close':
            return '<path d="m6 6 12 12"/><path d="M18 6 6 18"/>';
        case 'chevron-left':
            return '<path d="m15 6-6 6 6 6"/>';
        default:
            return '';
    }
}

/** Slug => icon name, ported from components/icons.tsx's serviceIcons map. */
function service_icon_name(string $slug): string
{
    $map = [
        'digital-marketing' => 'megaphone',
        'email-marketing' => 'mail',
        'website-development' => 'globe',
        'mobile-app-development' => 'device',
        'data-analytics' => 'chart',
        'church-crm' => 'users',
        'graphic-design' => 'pen',
        'web-design' => 'layout',
        'video-editing' => 'video',
        'system-automation' => 'workflow',
    ];
    return $map[$slug] ?? 'layout';
}

function icon(string $name, string $classes = 'h-5 w-5', ?int $strokeWidth = null): void
{
    $strokeWidth = $strokeWidth ?? (in_array($name, ['check', 'arrow-right', 'arrow-up-right', 'menu', 'close', 'chevron-left'], true) ? 2 : 1.8);
    $paths = icon_paths($name);
    echo '<svg class="' . htmlspecialchars($classes, ENT_QUOTES) . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' . $strokeWidth . '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . $paths . '</svg>';
}
