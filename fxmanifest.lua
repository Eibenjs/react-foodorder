fx_version 'adamant'
game 'gta5'

ui_page 'build/index.html'

lua54 'yes'
-- webpack_config '[src]/vue.config.js'

files {
    'build/index.html',
    'build/**',
}

client_scripts {
    'client/*.lua',
    'config.lua',
}

server_scripts {
    'config.lua',
}