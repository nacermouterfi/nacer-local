import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import TableauBord from '../views/TableauBord.vue'
import DemandesStage from '../views/DemandesStage.vue'
import OffresStage from '../views/OffresStage.vue'
import Candidats from '../views/Candidats.vue'
import Entreprises from '../views/Entreprises.vue'
import EntrepriseDetail from '../views/EntrepriseDetail.vue'
import AjouterEntreprise from '../views/AjouterEntreprise.vue';


const routes = [
  {
    path: '/',
    component: Accueil,
    children: [
      { path: '', name: 'tableaubord', component: TableauBord },
      { path: 'candidats', name: 'Candidats', component: Candidats },
      { path: 'demandes-stage', name: 'DemandesStage', component: DemandesStage },
      { path: 'entreprises', name: 'Entreprises', component: Entreprises },
      { path: 'offres-stage', name: 'OffresStage', component: OffresStage },
      { path: '/entreprises/:id', name: 'EntrepriseDetail', component: EntrepriseDetail },
      { path: '/ajouter-entreprise', name: 'AjouterEntreprise', component: AjouterEntreprise }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
