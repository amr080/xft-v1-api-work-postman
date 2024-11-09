const sidebarStructure = {
    'API Documentation': 'overview.md',
    'API': {
        'Overview': 'api/overview.md',
        'Accounts': 'api/accounts.md',
        'Core': 'api/core.md',
        'Deposits': 'api/deposits.md',
        'Payouts': 'api/payouts.md'
    }
};

function createSidebar(structure, parentElement = document.getElementById('sidebar-nav')) {
    for (const [key, value] of Object.entries(structure)) {
        const group = document.createElement('div');
        group.className = 'sidebar-group';
        
        const title = document.createElement('div');
        title.className = 'sidebar-group-title';
        title.textContent = key;
        
        if (typeof value === 'string') {
            title.addEventListener('click', () => loadContent(value));
            group.appendChild(title);
        } else {
            group.appendChild(title);
            const items = document.createElement('div');
            items.className = 'sidebar-items';
            
            // Create items for nested structure
            for (const [subKey, subPath] of Object.entries(value)) {
                const item = document.createElement('div');
                item.className = 'sidebar-item';
                item.textContent = subKey;
                item.addEventListener('click', () => loadContent(subPath));
                items.appendChild(item);
            }
            
            group.appendChild(items);
        }

        parentElement.appendChild(group);
    }
}

async function loadContent(path) {
    try {
        const response = await fetch(path);
        const markdown = await response.text();
        const contentArea = document.getElementById('content-area');
        contentArea.innerHTML = marked.parse(markdown);
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createSidebar(sidebarStructure);
    // Load the overview by default
    loadContent('api/overview.md');
});