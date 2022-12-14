import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {
  loadedRecipe: Recipe


  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService, 
    private router: Router, 
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
        if (!paramMap.has('recipeID')) {
            this.router.navigate(['/recipes'])
            return
        }

        const recipeID = paramMap.get('recipeID')
        this.loadedRecipe = this.recipesService.getRecipe(recipeID)
    })
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
        header: 'Are you sure?',
        message: 'Do you really want to delete the recipe?',
        buttons: [
            {
                text: 'Cancel',
                role: 'cancel'
            }, 
            {
                text: 'Delete',
                handler: () => {
                    this.recipesService.deleteRecipe(this.loadedRecipe.id)
                    this.router.navigate(['/recipes'])
                }
            }
        ]
    }).then(alert => alert.present())
  }

}
