Kafi = nil
PlayerLoaded = false
PlayerData = {}

Citizen.CreateThread(function()
    while Kafi == nil do
        TriggerEvent('kafi:GetObject', function(obj) Kafi = obj end)
        Citizen.Wait(200)
    end
    while Kafi.Functions.GetPlayerData().job == nil do 
        Citizen.Wait(100)
    end
    PlayerData = Kafi.Functions.GetPlayerData()
    PlayerLoaded = true
end)

local ui = false

RegisterCommand("togglefoodorder", function()
    ui = not ui
    toggleUI()
end)

function toggleUI()
    print(ui)
    if ui then 
        SetNuiFocus(true, true)
        SendNUIMessage({
            type = "SHOW_PAGE", 
            categorys = config.burgershotCategories,
            meals = config.burgershotMeals
        })
    else 
        SetNuiFocus(false, false)
        SendNUIMessage({
            type = "CLOSE_PAGE"
        })
    end
end

RegisterNUICallback("exit_focus", function(data, cb)
    ui = not ui
    SetNuiFocus(false, false)
end)