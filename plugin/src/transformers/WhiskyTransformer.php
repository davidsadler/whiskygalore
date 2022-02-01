<?php

namespace DTS\WhiskyJson\transformers;

use craft\elements\db\MatrixBlockQuery;
use craft\elements\Entry;
use DTS\WhiskyJson\transformers\AssetTransformer;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\TransformerAbstract;

class WhiskyTransformer extends TransformerAbstract
{
    private Manager $fractal;

    public function __construct()
    {
        $this->fractal = new Manager();
        $this->fractal->setSerializer(new ArraySerializer());
    }

    /**
     * @param Entry $whisky
     * @return array
     */
    public function transform(Entry $whisky): array
    {
        return [
            'title'       => $whisky->title,
            'images'      => $this->imagesToArray($whisky->image->all()),
            'description' => $this->matrixToArray($whisky->description),
        ];
    }

    /**
     * @param MatrixBlockQuery $matrix
     * @return array
     */
    private function matrixToArray(MatrixBlockQuery $matrix): array
    {
        $resource = new Item($matrix, new WhiskyDescriptionTransformer());

        return $this->fractal->createData($resource)->toArray();
    }

    /**
     * @param array $images
     * @return array
     */
    private function imagesToArray(array $images): array
    {
        $resource = new Collection($images, new AssetTransformer());

        return $this->fractal->createData($resource)->toArray()['data'];
    }
}
