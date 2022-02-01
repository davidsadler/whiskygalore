<?php

namespace DTS\WhiskyJson\transformers;

use craft\elements\db\MatrixBlockQuery;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\TransformerAbstract;

class WhiskyDescriptionTransformer extends TransformerAbstract
{
    public function __construct()
    {
        $this->fractal = new Manager();
        $this->fractal->setSerializer(new ArraySerializer());
    }

    /**
     * @param MatrixBlockQuery $matrix
     * @return array
     */
    public function transform(MatrixBlockQuery $matrix): array
    {
        $textBlock = $matrix->type('text')->one();

        $text = $textBlock ? $textBlock->text : null;

        $imageBlock = $matrix->type('image')->one();
        $images = $imageBlock ? $imageBlock->image->all() : [];

        return [
            'text'   => $text,
            'images' => $this->imagesToArray($images),
        ];
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
