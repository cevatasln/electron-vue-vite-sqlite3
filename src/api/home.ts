import { ipcRenderer } from 'electron'
export const getHome = {
    methods: {
        async getHome(s: any){
            return await ipcRenderer.invoke('home', [1, 2, 3]);
  
          }
    },
  }
  