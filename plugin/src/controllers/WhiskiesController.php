<?php

namespace DTS\WhiskyJson\controllers;

use Craft;
use craft\elements\Entry;
use craft\web\Controller;
use DTS\WhiskyJson\transformers\WhiskyTransformer;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use League\Fractal\Serializer\ArraySerializer;
use yii\web\NotFoundHttpException;
use yii\web\Response;

class WhiskiesController extends Controller
{
    /**
     * Allow anonymous access to this controller's action.
     *
     * @var string[]
     */
    protected $allowAnonymous = ['show'];

    /**
     * Returns the requested entry as JSON.
     *
     * @param string|null $slug
     * @return Response
     */
    public function actionShow(?string $slug): Response
    {
        try {
            $entry = Entry::find()
                ->section('whiskies')
                ->slug($slug)
                ->one();

            if ($entry) {
                return $this->returnJson($entry);
            } else {
                throw new NotFoundHttpException('Page not found.');
            }
        } catch (\Throwable $e) {
            Craft::error('Error resolving whisky-json endpoint: ' . $e->getMessage(), __METHOD__);

            throw $e;
        }
    }

    private function returnJson(Entry $entry): Response
    {
        $fractal = new Manager();

        $fractal->setSerializer(new ArraySerializer());

        $resource = new Item($entry, new WhiskyTransformer());

        $data = $fractal->createData($resource)->toArray();

        return $this->asJson($data);
    }
}
