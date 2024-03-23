import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import TableauBord from '../views/TableauBord.vue'
import DemandesStage from '../views/DemandesStage.vue'
import OffresStage from '../views/OffresStage.vue'
import Candidats from '../views/Candidats.vue'
import Entreprises from '../views/Entreprises.vue'
import EntrepriseDetails from '../views/EntrepriseDetails.vue'
import EntrepriseAjout from '../views/EntrepriseAjout.vue'
import EntrepriseMiseAjour from '../views/EntrepriseMiseAjour.vue'

const routes = [
  {
    path: '/',
    component: Accueil,
    children: [
      { path: '', name: 'tableaubord', component: TableauBord },
      { path: 'candidats', name: 'Candidats', component: Candidats },
      { path: 'demandes-stage', name: 'DemandesStage', component: DemandesStage },
      {
        path: 'entreprises',
        name: 'Entreprises',
        component: Entreprises
      },
      {
        path: 'entreprises/:id',
        name: 'EntrepriseDetails',
        component: EntrepriseDetails
      },
      {
        path: 'entreprises/ajouter',
        name: 'EntrepriseAjout',
        component: EntrepriseAjout
      },
      {
    
          path: '/entreprises/modifier/:id',
          name: 'EntrepriseMiseAjour',
          component: EntrepriseMiseAjour,
          props: true
        
      },
      { path: 'offres-stage', name: 'OffresStage', component: OffresStage }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
