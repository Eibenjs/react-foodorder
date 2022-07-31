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
    SetJobData()
    PlayerLoaded = true
end)

RegisterNetEvent("kafi:Client:OnPlayerLoaded")
AddEventHandler("kafi:Client:OnPlayerLoaded", function()
    SetJobData()
end)

RegisterNetEvent('kafi:Client:OnJobUpdate')
AddEventHandler('kafi:Client:OnJobUpdate', function(JobInfo)
    SetJobData()
end)

function SetJobData()
    PlayerData = Kafi.Functions.GetPlayerData()
    PlayerLoaded = true
end


local ui = false

RegisterCommand("togglefoodorder", function()
    ui = not ui
    toggleUI()
end)

function toggleUI()
    print(ui)
    if ui then 
        local accessOrdersPage = false
        for k, v in pairs(config.avaibleJobs) do 
            print(v)
            if v == PlayerData.job.name then 
                accessOrdersPage = true
                break
            end
        end
        print(accessOrdersPage)
        SetNuiFocus(true, true)
        SendNUIMessage({
            type = "SHOW_PAGE", 
            category = config.burgershotCategories,
            meals = config.burgershotMeals,
            job = accessOrdersPage
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