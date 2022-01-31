<?php

namespace DTS\WhiskyJson\controllers;

use craft\web\Controller;

class WhiskiesController extends Controller
{
    /**
     * Allow anonymous access to this controller's action.
     *
     * @var string[]
     */
    protected $allowAnonymous = ['show'];

    public function actionShow()
    {
        return 'Hello World';
    }
}
